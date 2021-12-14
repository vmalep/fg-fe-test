import {
  List,
  Table,
  TextField,
  NumberField,
  useTable,
  IResourceComponentsProps,
  getDefaultSortOrder,
  DateField,
  Space,
  EditButton,
  DeleteButton,
  useMany,
  useSelect,
  TagField,
  FilterDropdown,
  Select,
  ShowButton,
  useTranslate,
} from "@pankod/refine";
import { IMovie } from "interfaces";

export const MovieList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { tableProps, sorter } = useTable<IMovie>({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
  });

/*   const categoryIds =
    tableProps?.dataSource?.map((item) => item.category.id) ?? [];
  const { data: categoriesData, isLoading } = useMany<ICategory>({
    resource: "categories",
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  }); */

/*   const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
  }); */

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="title"
          key="title"
          title="Title"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("title", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="director"
          key="director"
          title="Director"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("director", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="year"
          key="year"
          title="Year"
          render={(value) => <DateField value={value} format="YYYY" />}
          defaultSortOrder={getDefaultSortOrder("status", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="duration"
          key="duration"
          title="Duration"
          render={(value) => <NumberField value={value} />}
          defaultSortOrder={getDefaultSortOrder("director", sorter)}
          sorter
        />
        <Table.Column<IMovie>
          title={t("table.actions")}
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
