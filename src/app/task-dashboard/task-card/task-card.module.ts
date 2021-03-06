import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatProgressBarModule } from "@angular/material";
import { TaskCardComponent } from "./task-card.component";
import { FormsModule } from "@angular/forms";
import { TaskModalComponent } from "./task-modal/task-modal.component";

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    CommonModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: [TaskCardComponent],
  declarations: [TaskCardComponent, TaskModalComponent],
  providers: []
})
export class TaskCardModule {}
