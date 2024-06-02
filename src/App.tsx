// in src/App.tsx
import { dataProvider } from './dataProvider';
import { Admin, Resource, ShowGuesser } from "react-admin";
import { PostList } from "./posts";
import { UserList } from "./users";

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} />
        <Resource name="users" list={UserList} show={ShowGuesser} recordRepresentation="name" />
    </Admin>
);