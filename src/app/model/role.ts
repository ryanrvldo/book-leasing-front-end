export class Role {
  private _id: number;
  private _code: string;
  private _name: string;

  public set id(id: number) {
    this._id = id;
  }

  public get id(): number {
    return this._id;
  }

  public set code(code: string) {
    this._code = code;
  }

  public get code(): string {
    return this._code;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
}
