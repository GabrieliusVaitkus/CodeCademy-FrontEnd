const getSleepHours = (day) => {
    switch (day) {
      case "Monday":
        return 8;
        break;
      case "Tuesday":
        return 9;
        break;
      case "Wednesday":
        return 7;
        break;
      case "Thursday":
        return 6;
        break;
      case "Friday":
        return 9;
        break;
      case "Saturday":
        return 5;
        break;
      case "Sunday":
        return 10;
        break;
      default:
        return "Error";
    }
  };
  
  const getActualSleepHours = () => {
    return (
      getSleepHours("Monday") +
      getSleepHours("Tuesday") +
      getSleepHours("Wednesday") +
      getSleepHours("Thursday") +
      getSleepHours("Friday") +
      getSleepHours("Saturday") +
      getSleepHours("Sunday")
    );
  };
  
  const getIdealSleepHours = idealHours => {
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(5);
    if (actualSleepHours === idealSleepHours) {
      console.log("User got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        "User got " +
          (actualSleepHours - idealSleepHours) +
          " hours more sleep than needed"
      );
    } else {
      console.log(
        "User should get some rest. Sleep debt is " +
          (idealSleepHours - actualSleepHours) +
          " hours"
      );
    }
  };
  
  calculateSleepDebt();
  