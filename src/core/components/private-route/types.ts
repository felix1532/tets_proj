export interface Props {
  component:
    | React.ComponentType<React.FunctionComponent>
    | React.ComponentType<React.ComponentClass>;
  user: boolean;
  path: string;
}
