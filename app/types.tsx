//LAYOUT INCLUDE TYPES

export interface RandomUsers {
  id: string;
  name: string;
  image: string;
}

export interface MenuItemsTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface MenuItemFollowComptypes {
  user: RandomUsers;
}
