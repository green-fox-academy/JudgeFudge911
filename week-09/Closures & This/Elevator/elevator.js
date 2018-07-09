window.onload(() => {
  const createElevatorController = () => {
    let view = createElevatorView();
    let model = createElevatorModel();
    return () => {
      function eventHandler(target) {
        switch (target) {
          case 'up':
            model.up();
            break;
          case 'down':
            model.down();
            break;
          case 'add':
            model.add();
            break;
          case 'remove':
            model.remove();
            break;
        }
      }
    };
  };

  const createElevatorModel = (maxFloor, maxPeople) => {
    let position = 0;
    let direction = 0;
    let people = 0;
    function isValidPeopleOrFloor(isFloor) {
      return isFloor
        ? elevatorPosition < maxFloor
        : peopleInElevator < maxPeople;
    }
    return () => {
      function addPeople() {
        if (isValidPeopleOrFloor(false)) {
          peopleInElevator++;
          view.render();
        }
      }
      function removePeople() {
        if (isValidPeopleOrFloor(false)) {
          peopleInElevator--;
          view.render();
        }
      }
      function getPosition() {
        return position;
      }
      function moveUp() {
        if (isValidPeopleOrFloor(true)) {
          position++;
          view.render();
        }
      }

      function moveDown() {
        if (isValidPeopleOrFloor(true)) {
          position--;
          view.render();
        }
      }

      function getDirection() {
        return direction;
      }

      function getPeople() {
        return people;
      }
    };
  };

  const createElevatorView = () => {
    const up = document.querySelector('.up');
    const down = document.querySelector('.down');
    const add = document.querySelector('.add');
    const remove = document.querySelector('.remove');
    const elevatorContainer = document.querySelector('.elevatorContainer');
    up.addEventListener('click', () => {
      eventHandler('up');
    });
    down.addEventListener('click', () => {
      eventHandler('down');
    });
    add.addEventListener('click', () => {
      eventHandler('add');
    });
    remove.addEventListener('click', () => {
      eventHandler('remove');
    });
  };
});
