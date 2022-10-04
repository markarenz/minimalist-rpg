import { iconInventory, iconAction, iconQuests, iconPlayer } from '../img';

const gameNavData = [
  {
    id: 'action',
    title: 'Action',
    icon: iconAction,
    bgColor: 'bg-gameNavAction after:bg-gameNavAction',
    borderColor: 'border-gameNavActionLight',
  }, // map
  {
    id: 'inventory',
    title: 'Stuff',
    icon: iconInventory,
    bgColor: 'bg-gameNavInventory after:bg-gameNavInventory border-gameNavInventoryLight',
    borderColor: 'border-gameNavInventoryLight',
  }, // backpack
  {
    id: 'quests',
    title: 'Quests',
    icon: iconQuests,
    bgColor: 'bg-gameNavQuests after:bg-gameNavQuests',
    borderColor: 'border-gameNavQuestsLight',
  }, // to-do list
  {
    id: 'player',
    title: 'You',
    icon: iconPlayer,
    bgColor: 'bg-gameNavPlayer after:bg-gameNavPlayer',
    borderColor: 'border-gameNavPlayerLight',
  }, // user badge
];

export default gameNavData;
