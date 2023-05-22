(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
    "Nick",
    "Ethan",
    "Ava",
    "Jackson",
    "Olivia",
    "Caleb",
    "Sophia",
    "Liam",
  ];
  // var names = [
  //   "Atul",
  //   "Johnson",
  //   "Janu",
  //   "Jakson",
  //   "Paul Starling",
  //   "Aman",
  //   "Larry M",
  //   "Paula",
  //   "L Wash",
  //   "Jim Carry",
  //   "Ice baby",
  //   "scethan",
  //   "Addams",
  //   "son",
  //   "Olivia Martin",
  //   "Caleb queue",
  //   "Sophia Turner",
  //   "Liam Son",
  // ];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker(names[i]);
    } else {
      helloSpeaker(names[i]);
    }
  }
})();
