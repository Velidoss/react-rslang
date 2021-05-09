export default interface ITextBookLink {
  id: number;
  link: string;
  text: string;
  onClickAction(): void;
  type: string;
}
