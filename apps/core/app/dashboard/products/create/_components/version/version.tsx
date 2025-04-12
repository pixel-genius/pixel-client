import { Switch } from "@repo/ui/components/switch";
import Typography from "@repo/ui/components/typography";

const Version = () => {
  return <>
    <Typography variant={"heading/sm"} className="font-bold">Version History</Typography>
    <div className="bg-card rounded-lg mt-4 px-4 pb-6">
       <div className="border-b border-solid border-indigo-600 flex flex-row gap-12 py-6">
            <div>
                <Typography variant={"label/lg"} className="font-bold">veriosn</Typography>
                <Typography variant={"label/lg"} className="font-normal">1.2.3</Typography>
            </div>
            <div>
                <Typography variant={"label/lg"} className="font-bold">Version Nots</Typography>
                <Typography variant={"label/sm"} className="font-normal">A freelance graphic and UI/UX designer. I specialise in Web Design , logo and brand development, motion graphics, and offer design services to business of all sizes ....</Typography>
            </div>    
            <div className="flex flex-row gap-2 items-center">
                <Typography variant={"label/sm"} className="font-medium">Deactivate</Typography>
                <Switch/>
                <Typography variant={"label/sm"} className="font-medium">Active</Typography>
            </div>
       </div>
       <div className="border-b border-solid border-indigo-600 flex flex-row gap-12 py-6">
            <div>
                <Typography variant={"label/lg"} className="font-bold">veriosn</Typography>
                <Typography variant={"label/lg"} className="font-normal">1.2.3</Typography>
            </div>
            <div>
                <Typography variant={"label/lg"} className="font-bold">Version Nots</Typography>
                <Typography variant={"label/sm"} className="font-normal">A freelance graphic and UI/UX designer. I specialise in Web Design , logo and brand development, motion graphics, and offer design services to business of all sizes ....</Typography>
            </div>    
            <div className="flex flex-row gap-2 items-center">
                <Typography variant={"label/sm"} className="font-medium">Deactivate</Typography>
                <Switch checked={true} />
                <Typography variant={"label/sm"} className="font-medium">Active</Typography>
            </div>
       </div>
    </div>
    
  </>;
};  

export default Version;