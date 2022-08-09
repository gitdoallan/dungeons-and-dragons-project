import { DWARF_MAX_LIFE_POINTS } from '../helpers/magicNumbers';
import Race from './Race';

export default class Dawrf extends Race {
  readonly _maxLifePoints: number;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = DWARF_MAX_LIFE_POINTS;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }
}
