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
      view.render();
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
      getView
    };
  };

  const createElevatorModel = (maxFloor, maxPeople) => {
    let position = 0;
    let direction = 0;
    let people = 0;

    function isValidPeopleOrFloor(isFloor) {
      return isFloor ? position < maxFloor : people < maxPeople;
    }

    function addPeople() {
      if (isValidPeopleOrFloor(false)) {
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
      if (isValidPeopleOrFloor(true)) {
        position++;
      }
    }

    function moveDown() {
      if (isValidPeopleOrFloor(true)) {
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
    const elevatorContainer = document.querySelector('.elevatorContainer');
    function render() {
      for (let i = 0; i < maxFloor; i++) {
        let floor = document.createElement('div');
        floor.classList.add(i, 'floor');
        elevatorContainer.appendChild(floor);
      }
    }
    return {
      render
    };
  };

  let controller = createElevatorController();

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
};
