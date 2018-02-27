export const BabyDevelopment = {
  meta: {
    id: "BabyDevelopment",
    name: "Baby Development",
    color: "#2D9CDB",
    description: "",
  },
  actionCards: [{
    title: (babyName) => `Read to ${babyName}`,
    who: 'baby',
    subtitle: "(give your whole attention)",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
  }, {
    title: "Go to the park together",
    subtitle: "(give your whole attention)",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
  }, {
    title: (babyName) => `Take ${babyName} to a playdate`,
    who: 'baby',
    subtitle: null,
    helpLink: null,
    helpText: null,
    minAge: 15552000,
    maxAge: null,
  }, {
    title: (babyName) => `Rotate ${babyName}'s toys`,
    who: 'baby',
    subtitle: null,
    helpLink: null,
    helpText: null,
    minAge: 10370000,
    maxAge: null,
  },
  ]
}
