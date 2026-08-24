import styled from 'styled-components';
import Popper from '@mui/material/Popper';
import { theme as muiTheme } from './theme/index';

// DESIGN TOKENS
// THEME
export const theme = muiTheme;
// MARGIN
export const mbSmall = `24px`;
export const mbMedium = `32px`;
export const mbBigger = `38px`;
// PADDING
export const pMinimum = `4px`;
export const pTiny = `6px`;
export const pSmall = `10px`;
export const pMedium = `16px`;
export const pFit = `24px`;
export const pBig = `28px`;
// GAP
export const gapSmallest = `4px`;
export const gapSmall = `8px`;
export const gapMedium = `16px`;
export const gapBig = `24px`;
// RADIUS
export const radSmall = `6px`;
export const radMedium = `8px`;
export const radBig = `10px`;
// COLORS
export const borderOnLight = `${theme.palette.divisory.mediumBorder}`;
export const bgLight = `#ffffff`;
const neutralGray = '#404040';
const disabledGray = '#D3D3D3';
// SIZES
export const hMedium = `39px`;
// TEXT
// ICONS

//|_|‾|_|-----|_|‾|_|‾|_ ICONS _|‾|_|‾|_|-----|_|‾|_| // 1
export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${pSmall};
  @media (max-width: 600px) {
    gap: 6px;
    width: 55%;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  height: 100%;
`;

export const ProductIcon = styled.button`
  background-color: ${(props) =>
    props.breadcrumb === 'make-forward' ||
    props.page === 'make-forward' ||
    props.page === 'make-view' ||
    props.page === 'make-the-price' ||
    props.page === 'upload' ||
    props.page === 'solicitar' ||
    props.page === 'categorias'
      ? '#A646DC'
      : props.styledtheme.palette.accentPurple.main};
  box-shadow: ${(props) =>
    props.breadcrumb === 'make-forward' ||
    props.page === 'make-forward' ||
    props.page === 'make-view' ||
    props.page === 'make-the-price' ||
    props.page === 'upload' ||
    props.page === 'solicitar' ||
    props.page === 'categorias'
      ? '0 0 0 1px #CBCBCB'
      : '0 0 0 1px #CBCBCB'};
  &:hover {
    box-shadow: ${(props) =>
      props.breadcrumb === 'make-forward'
        ? '#CBCBCB'
        : props.page === 'make-forward'
        ? '0 0 0 1px #CBCBCB, inset 0 0 0 1000px rgba(0,0,0,0.1)'
        : '0 0 0 1px #CBCBCB'};
  }
`;

//|_|‾|_|-----|_|‾|_|‾|_ WRAPPERS _|‾|_|‾|_|-----|_|‾|_| // 2
export const ProductLayout = styled.div`s
  padding: 0px 55px;
  padding-bottom: 10px;
  background-color: ${({ styledtheme }) =>
    styledtheme.palette.background.secondary};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
  justify-content: space-between;
`;

export const BeforeContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 6px;
  width: 100%;
`;
/* envolve o botão de retornar */

//|_|‾|_|-----|_|‾|_|‾|_ LAYOUT RELATED DIVS _|‾|_|‾|_|-----|_|‾|_| // 3
export const Navbar = styled.div`
  margin: 0 auto;
  position: relative;
  color: #000;
  padding-inline-end: 16px;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  width: 97%;
  z-index: 1;
  @media (max-width: 600px) {
    width: 98%;
    padding-inline-end: 0px;
  }
`;

export const FirstRowContainer = styled.div`
  display: block;
  background-color: #ffffff;
  padding: 16px 20px 16px 20px;
  border-radius: ${radBig};
  margin-bottom: ${(props) =>
    props.narrow
      ? `${mbSmall}`
      : !props.narrow && props.buttons
      ? `${mbBigger}`
      : `${mbMedium}`};
  border: 1px solid ${borderOnLight};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
`;

export const PageInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageInfoRowLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const PageInformation = styled.div`
  display: block;
`;

export const PageNavigation = styled.div`
  display: block;
`;

export const PageTitleGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.9rem;
`;

export const PageCompanyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 10px;
  max-width: fit-content;
  height: 20px;
  margin-left: 10px;
  column-gap: 5px;
  border: ${(props) =>
    props.alert ? '1px solid tomato' : '1px solid #C5C5C5'};
  background: ${(props) => (props.alert ? 'tomato' : 'none')};
  color: ${(props) => (props.alert ? '#FFFFFF' : '#999999')};
  border-radius: 5px;
  padding: 0px 6px 0px 6px;
  font-size: 12px;
`;

export const TableTop = styled.div`
  border: 1px solid ${borderOnLight};
  background: ${bgLight};
  width: 100%;
  padding: 16px 19px 12px 19px;
  margin-bottom: 0px;
  border-radius: ${radBig} ${radBig} 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: none;
`;

//|_|‾|_|-----|_|‾|_|‾|_ DIALOGS _|‾|_|‾|_|-----|_|‾|_| // 4
export const DialogBox = styled.div`
  background: ${bgLight};
  padding: ${pBig};
  border-radius: ${radBig};
  min-width: 550px;
  max-width: fit-content;
  min-height: 100px;
  max-height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DialogLabelGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: ${gapMedium};
`;

export const DialogIconWrapper = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: ${radMedium};
  background: #d2a3ed;
`;

export const DialogTitleGroup = styled.div`
  margin-top: -3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DialogTitle = styled.div`
  font-size: 22px;
  color: #222222;
  font-weight: 600;
`;

export const DialogSubtitle = styled.div`
  font-size: 15px;
  color: #bababa;
`;

export const DialogCore = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${pBig} 0px ${pBig} 0px;
  gap: ${gapBig};
`;

export const DialogButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.centralized ? 'center' : 'end')};
  column-gap: ${gapMedium};
`;

//|_|‾|_|-----|_|‾|_|‾|_ TITLES _|‾|_|‾|_|-----|_|‾|_| // 5
export const UserName = styled.p`
  color: ${({ styledtheme }) => styledtheme.palette.text.primary};
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
    width: 100%;
  }
`;

export const CompanyName = styled.p`
  color: ${({ styledtheme }) => styledtheme.palette.action.greytext};
  margin: 0;
  font-size: 12px;
  @media (max-width: 600px) {
    font-size: 10px;
    width: 100%;
  }
`;

//|_|‾|_|-----|_|‾|_|‾|_ BUTTONS _|‾|_|‾|_|-----|_|‾|_| // 6
export const TinyReturnButton = styled.button`
  display: flex;
  column-gap: ${gapSmallest};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 20px;
  width: 20px;
  background: none;
  color: #a9a9a9;
  border: 1px solid #b0b0b0;

  &:hover {
    color: #999999;
    width: auto;
    padding: 0px ${gapSmall} 0px ${gapSmall};
    border: 1px solid #aaaaaa;
  }

  &:active {
    color: #ffffff;
    background: #aaaaaa;
  }

  & span {
    font-size: 11px;
    display: none;
  }

  &:hover span {
    display: block;
  }
`;

export const RefreshButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${hMedium};
  height: ${hMedium};
  border-radius: ${radMedium};

  &:hover {
    background: ${theme.palette.accentPurple[500]};
    border: 1px solid ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};
  }
`;

export const InRowButton = styled.button`
  background-color: #fff;
  border: 1px solid ${theme.palette.divisory.mediumBorder};
  display: flex;
  padding: ${pTiny} ${pSmall} ${pTiny} ${pSmall};
  max-height: ${hMedium};
  border-radius: ${radSmall};

  &:hover {
    background: ${theme.palette.accentPurple[500]};
    border: 1px solid ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};
  }
`;

export const ButtonInsideContainer = styled.button`
  white-space: nowrap;
  max-width: fit-content;
  height: ${(props) => (props.customHeight ? props.customHeight : hMedium)};
  background: none;
  border: ${(props) => (props.action ? `1px solid ${neutralGray}` : '#171717')};
  border-radius: ${radMedium};
  color: ${(props) => (props.action ? neutralGray : '#FFFFFF')};
  display: flex;
  column-gap: ${gapSmall};
  align-items: center;
  padding: 0px ${pSmall} 0px ${pSmall};
  &:active {
    background: ${(props) =>
      props.disable ? disabledGray : theme.palette.accentPurple[500]};
    border: 1px solid
      ${(props) => (props.disable ? disabledGray : theme.palette.primary[200])};
    color: ${(props) =>
      props.disable ? '#949494' : theme.palette.primary[200]};
  }
  &:hover {
    background: ${theme.palette.primary[200]};
    border: 1px solid ${theme.palette.primary[200]};
    color: #ffffff;
  }
  ${(props) =>
    props.disable &&
    `
    cursor: not-allowed;
    opacity: 0.6;
    background: ${disabledGray};
    border: 1px solid ${disabledGray};
    color: ${neutralGray};
    
    &:hover, &:active {
      background: ${disabledGray};
      border: 1px solid ${disabledGray};
      color: #B0B0B0;
    }
  `}
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ALL ELSE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const RoundedInput = styled.input`
    width: 180px;
    padding: 0px 8px 0px 12px;
    height: 40px;
    border: 1px solid #c7c7c7;
    border-radius: ${radSmall};

    &:hover {
      border: 1px solid #000000;
    }

    &::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
      border-color: #3366cc;
    }
  }
`;

export const PlaceholderTableFirstLine = styled.div`
  text-align: center;
  width: 100%;
  height: fit-content;
  padding: 2px 0px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
  color: #5d5e66;
`;

export const PlaceholderTableSecondLine = styled.div`
  text-align: center;
  width: 100%;
  height: fit-content;
  padding: 2px 0px;
  margin-bottom: 0;
  font-size: 16px;
  color: #b9b9b9;
`;

export const PageTitleBadge = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: #aaaaaa;
  color: #f3f3f3;
  font-size: 11px;
  letter-spacing: 0.3px;
  font-weight: 500;
  padding: 2px 4px 0px 4px;
  height: 16px;
`;

export const PageTitle = styled.div`
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${(props) =>
    props.registrationPage
      ? props.styledtheme.palette.optional[20]
      : '#171717'};
  padding: 0px 0px 0px 10px;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.2px;
  align-self: center;
  &:hover {
    text-decoration: ${(props) =>
      props.registrationPage ? 'underline' : 'none'};
    cursor: ${(props) => (props.registrationPage ? 'pointer' : 'default')};
  }
`;

export const DividerBreadcrumbAndTitle = styled.div`
  display: block;
  font-size: 26px;
  font-weight: 400;
  color: ${(props) => props.styledtheme.palette.optional[20]};
`;

export const RegistrationPageBreadcrumb = styled.div`
  padding-top: 2px;
  line-height: 38px;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  color: #171717;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.08px;
`;

export const PageClientBox = styled(PageCompanyBox)`
  border: ${(props) =>
    props.alert
      ? '1px solid tomato'
      : `1px solid ${props.styledtheme.palette.primary.main}`};
  color: ${(props) =>
    props.alert ? '#FFFFFF' : `${props.styledtheme.palette.primary.main}`};
`;

export const RightSideWrapper = styled.div.attrs(({ buttons }) => buttons)`
  overflow-x: auto;
  max-width: 600px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ buttons }) =>
    buttons ? '24px 0px 5px 0px' : '5px 0px 5px 0px'};
  white-space: nowrap;
  &::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const RightSideButtonsWrapper = styled.div`
  display: flex;
  column-gap: 14px;
  min-width: 100%;
`;

export const RowOfButtons = styled.div`
  display: flex;
  column-gap: 9px;
  padding: 0px 0px 0px 0px;
`;

export const ModalFrameLabelWrapperFlexAlt = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 14px;
`;

export const ModalFrameLabelIconAlt = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #d2a3ed;
`;

export const ModalFrameLabelTitleWrapperAlt = styled.div`
  margin-top: -3px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const ModalFrameLabelTitleAlt = styled.span`
  font-size: 22px;
  color: #222222;
  font-weight: 600;
`;

export const ModalFrameLabelSubtitleAlt = styled.span`
  font-size: 15px;
  color: #bababa;
`;

//----------------TAX INFORMATION PAGE----------------
export const TabsWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

export const Tab = styled.div`
  padding: 6px 16px;
  background-color: ${(props) => (props.active ? '#ffffff' : '#ffffff')};
  border: ${(props) =>
    props.active ? '2px solid #923ec5' : '2px solid #c7c7c7'};
  border-radius: 6px;
  color: ${(props) => (props.active ? '#923ec5' : '#000000')};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: ${(props) => (props.active ? '#c7c7c7' : '#e0e0e0')};
    border: ${(props) =>
      props.active ? '2px solid #fff' : '2px solid #e0e0e0'};
    color: ${(props) => (props.active ? '#000000' : '#000000')};
  }
`;

//----------------COMPONENTS - MTW ACTIONS----------------
export const ButtonAsLink = styled.button`
  background: none;
  border: none;
  color: #6836ab;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  & > button {
    margin: 0px 0px 0px 0px;
  }
`;

export const StyledButton = styled.button`
  height: 38px;
  padding: 0px 10px;
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  text-transform: capitalize;
  font-size: 16px;
  color: ${(props) =>
    props.disabled
      ? props.styledtheme.palette.action.deepGrey
      : props.outline
      ? props.styledtheme.palette.primary[200]
      : '#FFF'};
  background-color: ${(props) =>
    props.disabled
      ? props.styledtheme.palette.action.middleGrey
      : props.primary
      ? props.styledtheme.palette.primary[200]
      : props.secondary
      ? props.styledtheme.palette.accentPurple[500]
      : 'transparent'};
  border: ${(props) =>
    props.outline
      ? `1px solid ${props.styledtheme.palette.primary.main}`
      : 'none'};
  font-weight: ${(props) => (props.secondary ? 'bold' : 'normal')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  &:hover {
    color: ${(props) =>
      props.outline ? props.styledtheme.palette.accentPurple.main : '#FFF'};
    background-color: ${(props) =>
      props.primary
        ? props.styledtheme.palette.accentPurple.main
        : 'transparent'};
    border-color: ${(props) =>
      props.primary
        ? props.styledtheme.palette.accentPurple.main
        : props.outline
        ? props.styledtheme.palette.accentPurple.main
        : 'transparent'};
  }
`;

//----------------COMPONENTS - MTW DATA DISPLAY----------------
export const CadastrosTablePagination = styled.div`
  & .css-1nrdd1w-MuiInputBase-root-MuiTablePagination-select,
  .css-11bfvty-MuiToolbar-root-MuiTablePagination-toolbar
    .MuiTablePagination-actions {
    margin-bottom: 0;
  }
  & .css-194a1fa-MuiSelect-select-MuiInputBase-input {
    padding: 0;
  }
  border: 1px solid ${({ styledtheme }) => styledtheme.palette.divisory.border};
  border-radius: 0px 0px 5px 5px;
`;

export const CadastrosModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 460px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const CadastrosModalTextField = styled.div`
  padding: 5px 0;
`;

export const CustomPopperStyled = styled(Popper)`
  max-width: fit-content;
`;

//----------------ELEMENTAR----------------
export const TableDiv = styled.div`
  padding: '20px 0';
`;
export const TipoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AddSped = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const FileBadge = styled.div`
  background: ${({ styledtheme }) => styledtheme.palette.primary[60]};
  height: 40px;
  width: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;
export const FileName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const TypeClass = styled.div`
  width: 100%;
  margin: 20px 0;
`;
export const FileInput = styled.input`
  color: transparent;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: 'Select file';
    color: ${({ styledtheme }) => styledtheme.palette.textlight.main};
    background: ${({ styledtheme }) => styledtheme.palette.primary.main};
    margin-left: 125px;
    border-radius: 6px;
    padding: 8px 18px;
    outline: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
  }
`;
export const ButtonBox = styled.div`
  padding: 32px 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    padding: 12px 0;
  }
`;
export const ElementarModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  @media (max-width: 600px) {
    width: 92%;
  }
`;
export const ModalTextField = styled.div`
  padding: 10px 6px;
`;
export const BtnMargin = styled.div`
  margin-left: 8px;
`;
export const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 14px;
  margin-top: 24px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;
export const List = styled.div`
  text-align: left;
  font-size: 12px;
  width: 100%;
`;
export const ModalButton2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const UploadBorder = styled.div`
  border: 1px dashed #a2a2a2;
  padding: 70px;
`;
export const UploadIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Label = styled.label`
  cursor: pointer;
`;
export const ElementarTableCss = styled.div`
  & .css-1nrdd1w-MuiInputBase-root-MuiTablePagination-select,
  .css-11bfvty-MuiToolbar-root-MuiTablePagination-toolbar
    .MuiTablePagination-actions {
    margin-bottom: 0;
  }
  & .css-194a1fa-MuiSelect-select-MuiInputBase-input {
    padding: 0;
  }
  border: 1px solid #eaecf0;
`;
export const TableCss = styled.div`
  & .css-1nrdd1w-MuiInputBase-root-MuiTablePagination-select,
  .css-11bfvty-MuiToolbar-root-MuiTablePagination-toolbar
    .MuiTablePagination-actions {
    margin-bottom: 0;
  }
  & .css-194a1fa-MuiSelect-select-MuiInputBase-input {
    padding: 0;
  }
  border: 1px solid #eaecf0;
  border-radius: 0px 0px 5px 5px;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.04em;
  padding-top: 32px;
  padding-bottom: 32px;
  line-height: 30px;
  text-transform: none;
  align-self: center;
  align-items: baseline;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const IconMargin = styled.div`
  margin-right: 10px;
  padding: 3px;
  color: white;
  background: ${({ styledtheme }) => styledtheme.palette.secondary.main};
  border-radius: 5px;
  border: 3px solid #faf9f6;
`;
export const BoxTitle = styled.div`
  padding: 32px 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    padding: 12px 0;
  }
`;

//----------------MAKE THE PRICE----------------
export const CheckButton = styled.button`
  margin: 0;
  &:disabled {
    background-color: ${(props) => props.styledtheme.palette.action.grey};
    color: ${(props) => props.styledtheme.palette.textlight.main};
  }
`;
export const ButtonsDivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 20px;
  border-radius: 8px;
  @media (max-width: 600px) {
    padding: 12px 0;
  }
`;
export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;
export const MakeThePriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//----------------OLHO DA MIA----------------

//----------------MAKE FORWARD NFE / NFSE / CTE----------------
export const UploadLinkCertificate = styled.div`
  min-height: 44px;
  min-width: 280px;
  max-width: 280px;
  font-weight: 600;
  padding: 8px 12px;
  background: #f2f2f2;
  border: 1px dashed #2cafc7;
  border-radius: 5px;
  text-align: center;
  color: #2cafc7;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const MakeForwardModalTextField = styled.div`
  padding: 8px 0px;
`;
export const MakeForwardModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;
export const MakeForwardFileBox = styled.div`
  max-height: 160px;
  min-width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 16px 14px;
`;
export const FileBoxContainer = styled.div`
  padding: 16px 0px;
  width: 100%;
`;
export const FileBoxContainerLite = styled.div`
  padding: 12px 0px 0px 0px;
  min-width: 280px;
  max-width: 280px;
`;
export const FileBoxRadioGroup = styled.div`
  padding: 12px 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-weight: 500;
  color: #222;
`;
export const BoxRowGap = styled.section`
  padding-top: 10px;
`;
export const ModalButtonSingle = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`;
export const PageSwipe = styled.button`
  border: solid 1px #9f9f9f;
  background-color: #9f9f9f;
  padding: 0;
  min-width: 28px;
  max-width: 28px;
  min-height: 30px;
  max-height: 30px;
  border-radius: 16px;
  text-align: center;
  margin: 0px 4px;
  line-height: 25px;
  color: ${({ numPages }) => (numPages > 1 ? '#fff' : '#555')};
  text-transform: none;
  &:hover {
    cursor: ${({ numPages }) => (numPages > 1 ? 'pointer' : 'not-allowed')};
    border: ${({ numPages }) =>
      numPages > 1 ? 'solid 1px #A646DC' : 'solid 1px #8F8F8F'};
    background: ${({ numPages }) => (numPages > 1 ? '#A646DC' : '#8F8F8F')};
  }
`;

export const PdfSize = styled.div`
  border: solid 1px #8f8f8f;
  background-color: #8f8f8f;
  padding: 0;
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  border-radius: 30px;
  text-align: center;
  margin: 0px 4px;
  line-height: 25px;
  color: ${({ numPages }) => (numPages > 1 ? '#fff' : '#555')};
  text-transform: none;
  &:hover {
    cursor: ${({ numPages }) => (numPages > 1 ? 'pointer' : 'not-allowed')};
    border: ${({ numPages }) =>
      numPages > 1 ? 'solid 1px #A646DC' : 'solid 1px #8F8F8F'};
    background: ${({ numPages }) => (numPages > 1 ? '#A646DC' : '#8F8F8F')};
  }
`;

//----------------UPLOAD----------------
export const IconTitle = styled.div`
  display: flex;
  padding: 0px 4px 0px 4px;
`;
export const ButtonTitle = styled.div`
  font-size: 15px;
  line-height: 28px;
  text-transform: none;
  align-self: center;
`;
export const PeriodDisplay = styled.div`
  padding: 0px 10px 0px 0px;
  font-size: 14px;
  color: #923ec5;
`;
export const PeriodDisplayTitle = styled.div`
  display: block;
  font-weight: 700;
`;
export const PeriodDisplayValue = styled.span`
  display: inline-block;
`;
export const FileTypeBox = styled.div`
  width: 100%;
  padding: 14px 0px 14px 0px;
  background: white;
  color: #111;
`;
export const UploadFileName = styled.div`
  font-size: 13px;
  color: #923ec5;
`;
export const UploadBoxSmallerCustom = styled.div`
  width: 100%;
  height: 100px;
  max-height: 21vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  row-gap: 6px;
  background: #f9f9f9;
  border: 1px dashed #a0a0a0;
  border-radius: 6px;

  & label {
    align-self: start;
    width: 100%;
    text-align: center;
    font-size: 14px;
  }
`;
export const UploadFileBox = styled.div`
  max-height: 160px;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 16px 14px 16px 14px;
`;
export const ButtonSubida = styled.div`
  margin: 0px 14px 0px 0px;
`;
export const UploadButtonSubida = styled.div`
  margin: 0px 0px 0px 0px;
`;
export const UploadBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 0px 0px;
`;
export const UploadBox = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  row-gap: 6px;
  background: #f9f9f9;
  border: 1px dashed #a0a0a0;
  border-radius: 6px;

  & label {
    align-self: start;
    width: 100%;
    text-align: center;
    font-size: 14px;
  }
`;
export const UploadBoxSmaller = styled(UploadBox)`
  height: 100px;
`;
export const UploadLink = styled.div`
  font-weight: 600;
  color: #2cafc7;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

//----------------MAKE VIEW UPLOAD----------------

//----------------MAKE VIEW HOME----------------
export const DivisionSelection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  width: fit-content;
  padding: 7px 12px;
  border: none;
  border-radius: 20px;
  background: ${(props) =>
    props.selectedButton ? props.styledtheme.palette.primary.main : 'none'};
  color: ${(props) =>
    props.selectedButton ? '#FFF' : props.styledtheme.palette.primary.main};
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.selectedButton
        ? props.styledtheme.palette.primary.main
        : '#A646DC45'};
  }
`;

//----------------MAKE VIEW MEUS DOCUMENTOS----------------
export const ToggleButton = styled.div`
  background-color: ${({ toggleUp1 }) => (toggleUp1 ? '#c9c9c9' : '#10B981')};
  border: 1px solid #f5f5f7;
  margin-left: 10px;
  padding: 0;
  border-radius: 12px;
  width: 22px;
  height: 22px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  &:hover {
    border: 1px solid #999999;
    cursor: pointer;
  }
`;

//----------------MAKE BI (MAKE VIEW DASHBOARDS)----------------

//----------------SOLICITAR DOCUMENTOS----------------

//----------------CADASTROS BASICOS----------------
export const ConsultaModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 55%;
    overflow: 'scroll;
    height: 700px;
    padding: 24px 20px;
    @media screen and (max-width: 600px) {
        width: 92%;
      }
`;
export const ConsultaModalTextField = styled.div`
  padding: 5px 0;
`;
export const ConsultaModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 14px;
  margin-top: 24px;
`;
export const ConsultaModal2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  overflow: scroll;
  height: 700px;
  padding: 24px 20px;
  @media (max-width: 600px) {
    width: 92%;
  }
`;
export const ConsultaBtnMargin = styled.div`
  margin-left: 8px;
`;
export const ConsultaModalButton2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ConsultaModalTable = styled.div`
  padding: 30px 0 0 0;
`;
export const SectionClass = styled.section`
  padding-top: 30px;
`;
export const CadastroSearchDiv = styled.div`
  padding: 20px 10px;
  border: 1px solid #eaecf0;
  display: flex;
  justify-content: space-between;
`;

export const CadastroIconTitle = styled.div`
  padding-bottom: 3px;
`;
export const CadastroButtonTitle = styled.h6`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 28px;
  text-transform: none;
  align-self: center;
  padding-top: 8px;
`;

//----------------BASE LEGAL----------------
export const BaseTableCss = styled.div`
  & .css-1nrdd1w-MuiInputBase-root-MuiTablePagination-select,
  .css-11bfvty-MuiToolbar-root-MuiTablePagination-toolbar
    .MuiTablePagination-actions {
    margin-bottom: 0;
  }
  & .css-194a1fa-MuiSelect-select-MuiInputBase-input {
    padding: 0;
  }
  border: 1px solid #e0e0e0;
  border-radius: 0px 0px 5px 5px;
  border-top: none;
`;

//----------------==============----------------ORGANIZAR----------------==============----------------
export const CruzamentosButtonsDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductBoxTitle = styled.div`
  padding: 32px 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProductTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.04em;
  padding-top: 32px;
  padding-bottom: 32px;
  line-height: 30px;
  text-transform: none;
  align-self: center;
  align-items: baseline;
`;
export const Search = styled.div`
  padding-bottom: 16px;
  width: 25%;
`;
export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
`;
export const ModalButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 14px;
`;
export const BtnsDivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: -16px;
`;
export const DisableButtons = styled.div`
  &:hover {
    cursor: none;
  }
`;
export const BtnsDiv = styled.div`
  display: flex;
  align-items: start;
  column-gap: 10px;
`;
export const BtnsDivEnd = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
`;
export const BtnTitleCustom = styled.div`
  font-size: 15px;
  line-height: 28px;
  text-transform: none;
  align-self: center;
  margin-left: 6px;
`;
export const TableTitle = styled.div`
  display: flex;
  flex-wrap: noWwrap;
  font-weight: 600;
  font-size: 17px;
  padding-left: 4px;
`;
export const SearchDiv = styled.div`
  padding: 20px 10px;
  border: 1px solid #eaecf0;
`;
export const ProductFileName = styled.div`
  height: 20px;
  font-size: 13px;
`;
export const ProductFileBox = styled.div`
  max-height: 160px;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 16px 14px 16px 14px;
`;
export const LinkTitle = styled.div`
  text-decoration: none;
  display: flex;
  color: #923ec5;
  &:hover: {
    cursor: pointer;
    color: #382059;
  }
`;
export const LinkIconTitle = styled.span`
  padding-bottom: 16px;
`;

//INPUTS

//DASHBOARDS
