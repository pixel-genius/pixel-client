import Typography from "@repo/ui/components/typography";

const NavbarLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <Typography component="a" href="/browse" variant="label/xs">
        Browse
      </Typography>
      <Typography component="a" href="/browse" variant="label/xs">
        Become an author
      </Typography>
    </div>
  );
};

export default NavbarLinks;
