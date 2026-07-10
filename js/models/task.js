// ==========================
// TASK MODEL
// ==========================

class Task {

    constructor(title, description, priority, dueDate, category) {

        this.id = Date.now();

        this.title = title;

        this.description = description;

        this.priority = priority;

        this.dueDate = dueDate;

        this.category = category;

        this.status = "TO_DO";

        this.createdAt = new Date().toISOString();

        this.updatedAt = null;

    }

   