import { DefaultModel } from "../../models/DefaultModel";
import { TableItem } from "./TableItem";

type TableProps = {
  items: DefaultModel[]
}


export function Table({ items }: TableProps) {
  return (
    <>
        <div className=" overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  className="px-5 py-3 border-b-2  TableCategoryBgTheme text-left text-xs font-semibold TableCategoryTextTheme uppercase tracking-wider">
                  Projeto
                </th>
                <th
                  className="px-5 py-3 border-b-2  TableCategoryBgTheme text-left text-xs font-semibold TableCategoryTextTheme uppercase tracking-wider">
                  Chain
                </th>
                <th
                  className="px-5 py-3 border-b-2  TableCategoryBgTheme text-left text-xs font-semibold TableCategoryTextTheme uppercase tracking-wider">
                  Data
                </th>
                <th
                  className="px-5 py-3 border-b-2  TableCategoryBgTheme text-left text-xs font-semibold TableCategoryTextTheme uppercase tracking-wider">
                  Whitepaper
                </th>
                <th
                  className="px-5 py-3 border-b-2  TableCategoryBgTheme text-left text-xs font-semibold TableCategoryTextTheme uppercase tracking-wider">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item) =>
                  <TableItem
                    item={item}
                    key={item.href}
                  />

                )
              }
            </tbody>
          </table>
        </div>
    </>
  );
}




