export interface ILink {
  label: string;
  link: string;
  subLinks?: ILink[];
}

export const links: ILink[] = [
  {
    link: '/',
    label: 'navigation.home',
  },
  {
    link: 'about_us',
    label: 'navigation.about',
  },
  {
    link: 'gallery',
    label: 'navigation.gallery',
  },
  {
    link: 'services',
    label: 'navigation.services',
    subLinks: [
      {
        link: 'shoe_restoration_warranty',
        label: 'navigation.services_submenu.shoe_restoration_warranty',
      },
      {
        link: 'shoe_restoration',
        label: 'navigation.services_submenu.shoe_restoration',
      },
      {
        link: 'bag_restoration',
        label: 'navigation.services_submenu.bag_restoration',
      },
      {
        link: 'casali_sole_protectors',
        label: 'navigation.services_submenu.casali_sole_protectors',
      },
      {
        link: 'golden_goose_sole_repair_service',
        label: 'navigation.services_submenu.golden_goose_sole_repair_service',
      },
      {
        link: 'jacket_restoration',
        label: 'navigation.services_submenu.jacket_restoration',
      },
      {
        link: 'delicate_hand_cleaning',
        label: 'navigation.services_submenu.delicate_hand_cleaning',
      },
    ],
  },
  {
    link: 'products',
    label: 'navigation.products',
    subLinks: [
      {
        link: 'all_products',
        label: 'navigation.products_submenu.all_products',
      },
      {
        link: 'suede_care',
        label: 'navigation.products_submenu.suede_care',
      },
      {
        link: 'leather_care',
        label: 'navigation.products_submenu.leather_care',
      },
      {
        link: 'brushes_and_accessories',
        label: 'navigation.products_submenu.brushes_and_accessories',
      },
    ],
  },
  {
    link: 'contacts',
    label: 'navigation.contact',
  },
];
