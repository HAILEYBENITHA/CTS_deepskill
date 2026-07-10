import Trainer from './trainer';

// Mock trainer data
const TrainersMock = [
  new Trainer(
    1,
    'Rahul Sharma',
    'rahul.sharma@cognizant.com',
    '9876543210',
    'Java Full Stack',
    ['Java', 'Spring Boot', 'React', 'SQL']
  ),
  new Trainer(
    2,
    'Priya Menon',
    'priya.menon@cognizant.com',
    '9876501234',
    'Frontend',
    ['HTML', 'CSS', 'JavaScript', 'Angular']
  ),
  new Trainer(
    3,
    'Arjun Nair',
    'arjun.nair@cognizant.com',
    '9812345678',
    'Cloud',
    ['AWS', 'Azure', 'Docker', 'Kubernetes']
  ),
  new Trainer(
    4,
    'Sneha Iyer',
    'sneha.iyer@cognizant.com',
    '9900112233',
    'Data',
    ['Python', 'Pandas', 'Machine Learning', 'SQL']
  )
];

export default TrainersMock;
