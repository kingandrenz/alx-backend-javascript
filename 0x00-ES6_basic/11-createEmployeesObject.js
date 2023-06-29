export default function createEmployeesObject(departmentName, employees) {
  const detail = {
    [departmentName]: employees,
  };

  return detail;
}
