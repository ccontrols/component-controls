export class GreeterInitializedMembers {
  readonly name: string = 'world';
  err(): void {
    console.log(this.name);
  }
}
