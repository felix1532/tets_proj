import { RouteComponentProps } from 'react-router-dom';

export interface Props {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  user: boolean;
  path: string;
}
