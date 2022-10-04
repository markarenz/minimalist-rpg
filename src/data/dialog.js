const dialog = {
  mike__default: {
    messageKey: 'dialog__mike__default',
    choices: [
      {
        conditions: {
          operator: 'and',
          conditionsArr: [],
        },
        messageKey: 'dialog__mike__reply__yes',
        commands: [
          { type: 'stat', key: 'car_fixing', value: 1, operator: '+=' },
          { type: 'flag', key: 'car_fixed', value: true },
          { type: 'nextDialog', id: 'mike__fixMyCar_complete' },
        ],
      },
      {
        conditions: {
          operator: 'and',
          conditionsArr: [],
        },
        messageKey: 'dialog__mike__reply__bye',
        commands: [{ type: 'exitDialog', id: '' }],
      },
    ],
  },
  mike__dont_know: {
    messageKey: 'dialog__mike__dont_know',
    choices: [
      {
        conditions: {
          operator: 'and',
          conditionsArr: [],
        },
        messageKey: 'common__ok',
        commands: [{ type: 'nextDialog', id: 'mike__default' }],
      },
      {
        conditions: {
          operator: 'and',
          conditionsArr: [],
        },
        messageKey: 'dialog__mike__reply__bye',
        commands: [{ type: 'exitDialog', id: '' }],
      },
    ],
  },
  mike__fixMyCar_complete: {
    messageKey: 'dialog__mike__fixMyCar_complete',
    choices: [
      {
        conditions: {
          operator: 'and',
          conditionsArr: [],
        },
        messageKey: 'dialog__mike__reply__huh',
        commands: [{ type: 'nextDialog', id: 'dialog__mike__default' }],
      },
      {
        conditions: {
          operator: 'and',
          conditionsArr: [],
        },
        messageKey: 'dialog__mike__reply__bye',
        commands: [{ type: 'exitDialog', id: '' }],
      },
    ],
  },
  mike__quest_complete: {
    messageKey: 'dialog__mike__quest_complete',
    choices: [
      {
        conditions: {
          operator: 'and',
          conditionsArr: [],
        },
        messageKey: 'dialog__mike__reply__youre_welcome',
        commands: [{ type: 'nextDialog', id: 'mike__default' }],
      },
    ],
  },
};

export default dialog;
