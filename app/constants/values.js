export const GRID_FILTER_ALL = 'all';
export const GRID_FILTER_AVAILABLE = 'аvailable';
export const GRID_FILTER_IN_PROGRESS = 'in-progress';
export const GRID_FILTER_DISCREPANCIES = 'discrepancies';

export const ROOM_STATUS_CLEAN = 'clean';
export const ROOM_STATUS_IN_PROGRESS = 'in progress';
export const ROOM_OCCUPANCY_VACANT = 'vacant';

export const ASC = 'ASC';
export const DESC = 'DESC';

export const MOCK_ROOMS = [
  {
    id: 'mr01',
    type: 'Cleaning',
    task: 'Full cleaing',
    status: 'Pending',
    occupancy: 'Vacant',
    remark: '',
    priority: 'Medium'
  },
  {
    id: 'mr02',
    type: 'Cleaning',
    task: 'Full cleaing',
    status: 'In progress',
    occupancy: 'Occupied',
    remark: 'Need 1 hour more',
    priority: 'High'
  },
  {
    id: 'mr03',
    type: 'Cleaning',
    task: 'Bathroom cleaning',
    status: 'Pending',
    occupancy: 'Occupied',
    remark: '',
    priority: 'Medium'
  },
  {
    id: 'mr04',
    type: 'Cleaning',
    task: 'Bathroom cleaning',
    status: 'Clean',
    occupancy: 'Occupied',
    remark: '',
    priority: 'Medium'
  },
  {
    id: 'mr05',
    type: 'Common',
    task: 'Throw out trash',
    status: 'Clean',
    occupancy: 'Occupied',
    remark: '',
    priority: 'Medium'
  },
  {
    id: 'mr06',
    type: 'Common',
    task: 'Throw out trash',
    status: 'Pending',
    occupancy: 'Vacant',
    remark: '',
    priority: 'Medium'
  },
  {
    id: 'mr07',
    type: 'Common',
    task: 'Check',
    status: 'In progress',
    occupancy: 'Occupied',
    remark: 'Checking...',
    priority: 'Low'
  },
  {
    id: 'mr08',
    type: 'Common',
    task: 'Check',
    status: 'Clean',
    occupancy: 'Vacant',
    remark: '',
    priority: 'Low'
  },
  {
    id: 'mr09',
    type: 'Common',
    task: 'Make the bed',
    status: 'In progress',
    occupancy: 'Occupied',
    remark: '',
    priority: 'Medium'
  },
  {
    id: 'mr10',
    type: 'Common',
    task: 'Make the bed',
    status: 'Pending',
    occupancy: 'Vacant',
    remark: 'Urgent please',
    priority: 'High'
  }
];
