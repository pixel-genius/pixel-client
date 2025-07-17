import { Typography } from "@repo/ui/components/atoms/typography";

export const ProductSummary = () => {
  return (
    <div className="w-[70%]">
      <Typography variant="heading/md" weight="bold" className="pb-6">
        Summary of this product
      </Typography>
      <Typography
        variant="paragraph/md"
        weight="light"
        className="text-foreground"
      >
        Core 2.0 is a massive leap forward, delivering a clean, minimal, and
        trendy dashboard UI kit designed for a wide range of use cases across
        desktop, tablet, and mobile applications. With a sleek, modern design
        style and enhanced UI/UX, it's available in both stunning light and dark
        modes 🔥.
        <br />
        <br />
        This powerhouse package includes 490 premade templates and over 500+
        components, all fully responsive and built with Figma autolayout for
        seamless customization. Whether you're ideating or prototyping, Core 2.0
        empowers designers to drag, drop, and mix parts to create dashboards in
        minutes. With a focus on clean design and development-ready files, the
        coded version in React is live now as a free update!
        <br />
        <br />✅ Explore a variety of dashboard types, including Overview,
        Products, Promote, Schedules, Sign In, Sign Up, Statements, Income,
        Notifications, Message Center, Comments, Account Settings, Refunds,
        Pricing Table, Affiliate Center, and Shop. 👀 View Figma Preview
      </Typography>
    </div>
  );
};
