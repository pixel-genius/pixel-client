import { useState } from "react";
import Typography from "@repo/ui/components/typography";
import { Switch } from "@repo/ui/components/switch";

export interface VersionInfoType {
    title:string, 
    description:string, 
    version:string, 
    checked:boolean

} 
const VersionInfo = (data:VersionInfoType) => {

    const [checked, setChecked] = useState<{ checked: boolean }>({ checked: data.checked });

  return (
    <div className="border-b border-solid border-border flex flex-row gap-12 py-6" key={data.title}>
        <div>
            <Typography variant={"label/lg"} className="font-bold">{data.title}</Typography>
            <Typography variant={"label/lg"} weight="normal" className="text-foreground">{data.version}</Typography>
        </div>
        <div>
            <Typography variant={"label/lg"} className="font-bold">Version Nots</Typography>
            <Typography variant="label/sm" weight="normal" className="text-foreground">{data.description}</Typography>
        </div>    
        <div className="flex flex-row gap-2 items-center">
            <Typography variant={"label/sm"} className="font-medium">Deactivate</Typography>
            <Switch checked={checked.checked} onCheckedChange={(value) => setChecked((prev) => ({...prev, checked: value}))} />
            <Typography variant={"label/sm"} className="font-medium">Active</Typography>
        </div>
    </div>
  );
};  

export default VersionInfo;