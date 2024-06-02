// in src/posts.tsx
import { useRecordContext} from "react-admin";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
} from "react-admin";



const postFilters = [
    // eslint-disable-next-line react/jsx-key
    <TextInput source="q" label="Search" alwaysOn />,
    // eslint-disable-next-line react/jsx-key
    <ReferenceInput source="userId" label="User" reference="users" />,
];


const PostTitle = () => {
    const record = useRecordContext();
      return <span>Post {record ? `"${record.title}"` : ''}</span>;
};
    

export const PostList = () => (
    <List filters={postFilters}>
    <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" link="show" />
        <TextField source="title" />
        <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="userId" reference="users" link="show" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  );

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Create>
);


