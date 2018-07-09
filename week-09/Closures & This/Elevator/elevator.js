window.onload = () => {
  const createElevatorController = () => {
    const maxFloor = 10;
    const maxPeople = 10;
    let view = createElevatorView(maxFloor, maxPeople);
    let model = createElevatorModel(maxFloor, maxPeople);
    function eventHandler(target) {
      switch (target) {
        case 'up':
          model.moveUp();
          break;
        case 'down':
          model.moveDown();
          break;
        case 'add':
          model.addPeople();
          break;
        case 'remove':
          model.removePeople();
          break;
      }
      view.render(model.getPosition(), model.getPeople(), model.getDirection());
    }

    function getMaxFloor() {
      return maxFloor;
    }

    function getModel() {
      return model;
    }

    function getView() {
      return view;
    }

    return {
      eventHandler,
      getModel,
      getView,
      getMaxFloor
    };
  };

  const createElevatorModel = (maxFloor, maxPeople) => {
    let position = 0;
    let direction = 1;
    let people = 0;

    function isValidPeopleOrFloor(isAdd = -1) {
      return isAdd !== -1 ? checkPeople(isAdd) : checkFloor();
    }

    function checkFloor() {
      return direction === 1 ? position < maxFloor-1 : position > 0;
    }

    function checkPeople(isAdd) {
      return isAdd === true ? people < maxPeople : people > 0;
    }

    function addPeople() {
      if (isValidPeopleOrFloor(true)) {
        people++;
      }
    }

    function removePeople() {
      if (isValidPeopleOrFloor(false)) {
        people--;
      }
    }

    function getPeople() {
      return people;
    }

    function moveUp() {
      direction = 1;
      if (isValidPeopleOrFloor()) {
        position++;
      }
    }

    function moveDown() {
      direction = -1;
      if (isValidPeopleOrFloor()) {
        position--;
      }
    }

    function getPosition() {
      return position;
    }

    function getDirection() {
      return direction;
    }
    return {
      addPeople,
      removePeople,
      getPeople,
      moveUp,
      moveDown,
      getPosition,
      getDirection
    };
  };

  const createElevatorView = (maxFloor, maxPeople) => {
    function setActiveFloor(floorNumber, people) {
      Array.from(elevatorContainer.children).forEach(e => {
        if (e.classList.contains(`${floorNumber}`)) {
          e.classList.add('activeFloor');
          e.innerHTML = people;
        }
      });
    }

    function removeActiveFloor() {
      Array.from(elevatorContainer.children).forEach(e => {
        if (e.classList.contains('activeFloor')) {
          e.classList.remove('activeFloor');
          e.innerHTML = '';
        }
      });
    }

    function render(position, people, direction) {
      removeActiveFloor();
      setActiveFloor(position, people);
    }
    return {
      render
    };
  };

  const controller = createElevatorController();
  const view = controller.getView();
  const model = controller.getModel();

  const up = document.querySelector('.up');
  const down = document.querySelector('.down');
  const add = document.querySelector('.add');
  const remove = document.querySelector('.remove');

  up.addEventListener('click', () => {
    controller.eventHandler('up');
  });
  down.addEventListener('click', () => {
    controller.eventHandler('down');
  });
  add.addEventListener('click', () => {
    controller.eventHandler('add');
  });
  remove.addEventListener('click', () => {
    controller.eventHandler('remove');
  });

  const elevatorContainer = document.querySelector('.elevatorContainer');

  const numberOfFloors = controller.getMaxFloor();

  for (let i = numberOfFloors - 1; i > -1; i--) {
    let floor = document.createElement('div');
    floor.classList.add(i, 'floor');
    elevatorContainer.appendChild(floor);
  }

  view.render(0, 0);
};