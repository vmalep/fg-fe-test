export interface ICategory {
  id: string;
  title: string;
}
export interface IPost {
  id: string;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: ICategory;
}
export interface IMovie {
  id: string;
  title: string;
  director: string;
  year: string;
  color: "false" | "true";
  duration: number;
  user_id: number;
}