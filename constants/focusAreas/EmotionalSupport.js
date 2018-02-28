export const EmotionalSupport = {
  meta: {
    id: "EmotionalSupport",
    name: "Emotional Support",
    color: "#bc9fca",
    description: "",
  },
  actionCards: [{
    title: (momName) => `Check in with ${momName} to see how she is doing emotionally`,
    who: 'mom',
    subtitle: "(give your whole attention)",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
  }, {
    title: (momName) => `Listen to ${momName} talk about something she cares about`,
    who: 'mom',
    subtitle: "(give your whole attention)",
    helpLink: null,
    helpText: null,
    minAge: null,
    maxAge: null,
  },
  ]
};
