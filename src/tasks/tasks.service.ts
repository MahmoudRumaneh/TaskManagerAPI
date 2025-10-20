import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AdviceService } from 'src/common/advice.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly adviceService: AdviceService,
  ) {}

  async create(createTaskDto: CreateTaskDto, userPayload: any) {
    const task = this.taskRepository.create({
      ...createTaskDto,
      user: { id: userPayload.sub },
    });
    const savedTask = await this.taskRepository.save(task);
    const advice = await this.adviceService.getRandomAdvice();
    return { ...savedTask, advice };
  }

  async findAll(userPayload: any): Promise<Task[]> {
    return this.taskRepository.find({
      where: { user: { id: userPayload.sub } },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string, userPayload: any) {
    const task = await this.taskRepository.findOne({
      where: { id, user: { id: userPayload.sub } },
    });
    if (!task) throw new NotFoundException('Task not found');
    const advice = await this.adviceService.getRandomAdvice();
    return { ...task, advice };
  }

  async update(
    id: string,
    dto: UpdateTaskDto,
    userPayload: any,
  ): Promise<Task> {
    const task = await this.findOne(id, userPayload);
    Object.assign(task, dto);
    return this.taskRepository.save(task);
  }

  async remove(id: string, userPayload: any): Promise<{ message: string }> {
    const task = await this.findOne(id, userPayload);
    await this.taskRepository.remove(task);
    return { message: 'Task deleted successfully' };
  }
}
