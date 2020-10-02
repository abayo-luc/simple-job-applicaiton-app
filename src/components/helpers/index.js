export const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return '#ccc';
    case 'invited':
      return 'blue';
    case 'passed':
      return 'green';
    case 'failed':
      return 'red';
    default:
      return 'blue';
  }
};
