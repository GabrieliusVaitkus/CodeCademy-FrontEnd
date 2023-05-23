class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
      );
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomNumber];
    }
  
    set numberOfStudents(value) {
      if (value.isNaN()) {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      } else {
        this._numberOfStudents = value;
      }
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, "primary", numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, "high", numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  class MiddleSchool extends School {
    constructor(name, level, numberOfStudents, averageTestScores, scholOverview) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
      this._averageTestScores = averageTestScores;
      this._schoolOverview = schoolOverview;
    }
  }
  
  const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  lorraineHansbury.quickFacts();
  const substitute = School.pickSubstituteTeacher(
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
  const alSmith = new HighSchool("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  console.log(alSmith.sportsTeams);
  