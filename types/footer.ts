import { IconType } from "react-icons";

export type ContactLinkType = {
  label: string;
  href: string;
  Icon: IconType;
  primary?: boolean;
};

export type QuickLinkType = {
  title: string;
  href: string;
}