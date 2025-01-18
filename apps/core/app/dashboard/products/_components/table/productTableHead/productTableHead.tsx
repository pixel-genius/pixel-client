import { TableHead, TableRow } from "@repo/ui/components/table";
import Typography from "@repo/ui/components/typography";

const ProdcutTableHead = () => {
  return (
    <TableRow className="!bg-card">
      <TableHead className="border-b-2 border-background">
        <Typography className="font-bold text-foreground" variant="label/sm">
          #
        </Typography>
      </TableHead>
      <TableHead className="border-b-2 border-background">
        <Typography className="font-bold text-foreground" variant="label/sm">
          Product Name
        </Typography>
      </TableHead>
      <TableHead className="border-b-2 border-background">
        <Typography className="font-bold text-foreground" variant="label/sm">
          Status
        </Typography>
      </TableHead>
      <TableHead className="border-b-2 border-background">
        <Typography className="font-bold text-foreground" variant="label/sm">
          Sales
        </Typography>
      </TableHead>
      <TableHead className="border-b-2 border-background">
        <Typography className="font-bold text-foreground" variant="label/sm">
          Version
        </Typography>
      </TableHead>
      <TableHead className="border-b-2 border-background">
        <Typography className="font-bold text-foreground" variant="label/sm">
          Earining
        </Typography>
      </TableHead>
      <TableHead className="border-b-2 border-background">
        <Typography className="font-bold text-foreground" variant="label/sm">
          Actions
        </Typography>
      </TableHead>
    </TableRow>
  );
};

export { ProdcutTableHead };
