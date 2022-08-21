import mongoose from '../index';

const Task = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    default: null,
    required: false,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('Tarefas', Task);
