export class Profile {
  private _id: number;
  private _fullName: string;
  private _email: string;
  private _phone: string;
  private _address: string;

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get fullName(): string {
    return this._fullName;
  }

  public set fullName(fullName: string) {
    this._fullName = fullName;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(phone: string) {
    this._phone = phone;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }
}
