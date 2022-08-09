import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly _name: string;
  readonly _special: number;
  readonly _cost: number;

  constructor(name: string, special = 0, cost = 0) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public get name() {
    return this._name;
  }

  public get special() {
    return this._special;
  }

  public get cost() {
    return this._cost;
  }

  abstract get energyType(): EnergyType; 
}