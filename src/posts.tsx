// in src/posts.tsx
import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
    <ReferenceField source="userId" reference="users" link="show" />
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" />
        <TextField source="title" />
        <EditButton />
    </Datagrid>
  </List>
);