import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }

export default interface MenuEntry {
  icon: icon,
  label: string
}