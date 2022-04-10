import { Module } from '@nestjs/common';
import { CoursesService } from 'src/services/courses.service';
import { StudentsService } from 'src/services/students.service';
import { PurchasesController } from './controllers/purchases.controller';
import { EnrollmentsService } from '../services/enrollments.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchasesController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}
