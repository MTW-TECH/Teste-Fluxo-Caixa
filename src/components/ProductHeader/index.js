import React, { useState } from 'react';
import BusinessIcon from '@mui/icons-material/Business';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
// COMPONENTS
import ButtonPageNavigation from 'components/MTWActions/ButtonPageNavigation';
import ButtonReturn from 'components/MTWActions/ButtonReturn';
// SERVICES
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// STYLE
import './style.css';
import styledtheme from '../../styledThemeOn';
import {
  BeforeContainer,
  FirstRowContainer,
  PageInfoRowLeft,
  PageInformation,
  PageTitleGroup,
  PageTitleBadge,
  PageTitle,
  DividerBreadcrumbAndTitle,
  RegistrationPageBreadcrumb,
  PageCompanyBox,
  PageClientBox,
  RightSideWrapper,
  RightSideButtonsWrapper,
  PageInfoRow,
  PageNavigation,
  RowOfButtons
} from '../../styledComponentsStyles';

function ProductHeader({
  page,
  pageBack,
  buttons,
  narrow,
  hidden,
  subPage,
  workflowFiles,
  groupOfPages,
  currentPage,
  registrationMainPage,
  registrationPage,
  registrationPageAt,
  managementPage,
  alert,
  pageTitle,
  cnpj,
  masterClient,
  breadcrumb,
  isolated,
  language,
  toggleLanguage,
  children
}) {
  ProductHeader.propTypes = {
    onClick: PropTypes.func
  };

  const navigate = useNavigate();
  const location = useLocation();

  const isLevdata = location.pathname.startsWith('/levdata');
  const isNavTax = location.pathname.startsWith('/navtax');

  const withBasePath = (path) => {
    if (isLevdata) return `/levdata${path}`;
    if (isNavTax) return `/navtax${path}`;
    return path;
  };

  function ToggleLanguage() {
    let hidden = { display: 'flex', visibility: 'hidden' };
    let show = { display: 'flex', visibility: 'visible' };
    return (
      <button
        onClick={() => toggleLanguage()}
        style={{
          backgroundColor: '#DCDCDC',
          height: '32px',
          width: '68px',
          color: 'white',
          fontSize: '16px',
          padding: '10px',
          position: 'relative',
          transition: 'background-color 0.5s ease',
          //zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '2px solid #969696',
          borderRadius: '30px'
        }}
      >
        <div style={language === 'deutsch' ? show : hidden}>
          {DeutschFlag()}
        </div>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '50%',
            height: '24px',
            width: '24px',
            position: 'absolute',
            right: language === 'deutsch' ? '4%' : 'calc(100% - 27px)',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'right 0.5s ease',
            zIndex: 0
          }}
        ></div>
        <div style={language === 'deutsch' ? hidden : show}>
          {PortugueseFlag()}
        </div>
      </button>
    );
  }

  function DeutschFlag() {
    let style = { width: '18px' };
    return (
      <img
        src="https://flagicons.lipis.dev/flags/4x3/de.svg"
        alt="DE"
        style={style}
      />
    );
  }

  function PortugueseFlag() {
    let style = { width: '18px' };
    return (
      <img
        src="https://flagicons.lipis.dev/flags/4x3/pt.svg"
        alt="PT"
        style={style}
      />
    );
  }

  const groupOfPagesList = {
    makeForward: [
      { name: 'NF-e', link: '/make-forward', modelo: '55' },
      { name: 'NFS-e', link: '/make-forward-nfse' },
      { name: 'CTE', link: '/make-forward-cte' },
      { name: 'NFC-e', link: '/make-forward', modelo: '65' }
    ]
  };

  function GroupOfPagesNavButton({ groupOfPages }) {
    const list = groupOfPagesList[groupOfPages];
    const storeSelectedPage = localStorage.getItem('selectedPage') || 'NF-e';
    const [selectedOption, setSelectedOption] = useState(storeSelectedPage);

    const handleOptionClick = (option) => {
      let page = list.find((p) => p.name === option);
      let link = withBasePath(page.link);
      let modelo = page.modelo;

      setSelectedOption(option);
      localStorage.setItem('selectedPage', option);

      navigate(link, {
        replace: true,
        state: {
          modelo,
          selectedPage: option
        }
      });
    };
    return (
      <div className="multipleSelectSwipeMF">
        {list.map((page) => (
          <button
            key={page.name}
            className={
              selectedOption === page.name
                ? 'multipleSelectSwipeCurrent'
                : 'multipleSelectSwipe'
            }
            onClick={() => handleOptionClick(page.name)}
          >
            {page.name}
          </button>
        ))}
      </div>
    );
  }

  const managementGroupOfPagesList = {
    makeForward: [
      { name: 'NF-e', link: '/make-forward/tag-management/nfe' },
      { name: 'NFS-e', link: '/make-forward/tag-management/nfse' },
      { name: 'CTE', link: '/make-forward/tag-management/cte' }
    ]
  };

  function ManagementGroupOfPagesNavButton({ groupOfPages }) {
    const list = managementGroupOfPagesList[groupOfPages];
    const pages = list.map((page) => page.name);
    const [selectedOption, setSelectedOption] = useState(currentPage);
    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = (bool) => {
      setIsOpen(bool);
    };
    const handleOptionClick = (option) => {
      let link = list.find((page) => page.name === option)?.link;
      setSelectedOption(option);
      setIsOpen(false);
      let goLink = () => navigate(link);
      goLink();
    };
    const dropdownOptions = pages.filter((option) => option !== selectedOption);
    return (
      <div
        onMouseEnter={() => handleButtonClick(true)}
        onMouseLeave={() => handleButtonClick(false)}
        className="dropdown-sis"
      >
        <button>{selectedOption}</button>
        {isOpen && (
          <div className="dropdown-menu-sis">
            {dropdownOptions.map((option) => (
              <button key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  const dlmOptions = {
    dlm: [
      { name: 'Opção 1', link: '/dlm' },
      { name: 'Opção 2', link: '/dlm' },
      { name: 'Opção 3', link: '/dlm' },
      { name: 'Opção 4', link: '/dlm' }
    ]
  };

  function WorkflowFilesDropdown() {
    const list = dlmOptions['dlm'];
    const pages = list.map((page) => page.name);
    const [selectedOption, setSelectedOption] = useState('Workflow');
    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = (bool) => {
      setIsOpen(bool);
    };
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
    const dropdownOptions = pages.filter((option) => option !== selectedOption);
    return (
      <div
        onMouseEnter={() => handleButtonClick(true)}
        onMouseLeave={() => handleButtonClick(false)}
        className="dropdown-sis"
      >
        <button>{selectedOption}</button>
        {isOpen && (
          <div className="dropdown-menu-sis">
            {dropdownOptions.map((option) => (
              <button key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {managementPage ? (
        <div>
          <BeforeContainer>
            <ButtonReturn link={pageBack} />
          </BeforeContainer>
          <FirstRowContainer
            buttons={buttons}
            narrow={narrow}
            id="first-row-container"
          >
            <PageInfoRow>
              <div id="left-size">
                <PageInfoRowLeft>
                  <PageNavigation>
                    <ButtonPageNavigation
                      breadcrumb={breadcrumb}
                      page={page}
                      boxed={true}
                    />
                  </PageNavigation>
                  <PageInformation>
                    <PageTitleGroup>
                      <PageTitle
                        registrationPage={registrationPage}
                        styledtheme={styledtheme}
                      >
                        {pageTitle}
                      </PageTitle>
                      {groupOfPages ? (
                        <ManagementGroupOfPagesNavButton
                          groupOfPages={groupOfPages}
                        />
                      ) : null}
                    </PageTitleGroup>
                    <PageCompanyBox alert={alert}>
                      <BusinessIcon
                        sx={{
                          width: '13px',
                          marginBottom: '1px'
                        }}
                      />
                      {cnpj}
                    </PageCompanyBox>
                  </PageInformation>
                </PageInfoRowLeft>
              </div>
              {/*left/right*/}
              <div id="right-side">
                <RowOfButtons>{children}</RowOfButtons>
              </div>
            </PageInfoRow>
          </FirstRowContainer>
        </div>
      ) : registrationPage ? (
        <div>
          <BeforeContainer>
            <ButtonReturn link={pageBack} />
          </BeforeContainer>
          <FirstRowContainer
            buttons={buttons}
            narrow={narrow}
            id="first-row-container"
          >
            <PageInfoRow>
              <div id="left-size">
                <PageInfoRowLeft>
                  <PageNavigation>
                    <ButtonPageNavigation
                      breadcrumb={breadcrumb}
                      page={page}
                      boxed={true}
                    />
                  </PageNavigation>
                  <PageInformation>
                    <PageTitleGroup>
                      {registrationPage ? (
                        <PageTitle
                          onClick={() => navigate('/cadastros-basicos/home')}
                          registrationPage={registrationPage}
                          styledtheme={styledtheme}
                        >
                          {pageTitle}
                        </PageTitle>
                      ) : (
                        <PageTitle
                          registrationPage={registrationPage}
                          styledtheme={styledtheme}
                        >
                          {pageTitle}
                        </PageTitle>
                      )}
                      {registrationPage ? (
                        <>
                          <DividerBreadcrumbAndTitle styledtheme={styledtheme}>
                            /
                          </DividerBreadcrumbAndTitle>
                          <RegistrationPageBreadcrumb>
                            <div>{registrationPageAt}</div>
                          </RegistrationPageBreadcrumb>
                        </>
                      ) : null}
                    </PageTitleGroup>
                    <PageClientBox alert={alert} styledtheme={styledtheme}>
                      <BadgeOutlinedIcon
                        sx={{
                          width: '13px',
                          marginBottom: '1px'
                        }}
                      />
                      <div>{`Cliente: ${masterClient}`}</div>
                    </PageClientBox>
                  </PageInformation>
                </PageInfoRowLeft>
              </div>
              {/*left/right*/}
              <div id="right-side">
                <RowOfButtons>{children}</RowOfButtons>
              </div>
            </PageInfoRow>
          </FirstRowContainer>
        </div>
      ) : registrationMainPage ? (
        <div>
          <BeforeContainer>
            <ButtonReturn link={pageBack} />
          </BeforeContainer>
          <FirstRowContainer
            buttons={buttons}
            narrow={narrow}
            id="first-row-container"
          >
            <PageInfoRow>
              <div id="left-size">
                <PageInfoRowLeft>
                  <PageNavigation>
                    <ButtonPageNavigation
                      breadcrumb={breadcrumb}
                      page={page}
                      boxed={true}
                    />
                  </PageNavigation>
                  <PageInformation>
                    <PageTitleGroup>
                      <PageTitle
                        registrationPage={registrationPage}
                        styledtheme={styledtheme}
                      >
                        {pageTitle}
                      </PageTitle>
                    </PageTitleGroup>
                    <PageClientBox alert={alert} styledtheme={styledtheme}>
                      <BadgeOutlinedIcon
                        sx={{
                          width: '13px',
                          marginBottom: '1px'
                        }}
                      />
                      {`Cliente: ${masterClient}`}
                    </PageClientBox>
                  </PageInformation>
                </PageInfoRowLeft>
              </div>
              {/*left/right*/}
              <div id="right-side">
                <RowOfButtons>{children}</RowOfButtons>
              </div>
            </PageInfoRow>
          </FirstRowContainer>
        </div>
      ) : buttons && !hidden ? (
        <div>
          <BeforeContainer>
            <ButtonReturn link={pageBack} />
          </BeforeContainer>
          <FirstRowContainer
            buttons={buttons}
            narrow={narrow}
            id="first-row-container"
          >
            <PageInfoRow>
              <div id="left-size">
                <PageInfoRowLeft>
                  <PageNavigation>
                    <ButtonPageNavigation
                      breadcrumb={breadcrumb}
                      page={page}
                      boxed={true}
                    />
                  </PageNavigation>
                  <PageInformation>
                    <PageTitleGroup>
                      <PageTitle
                        registrationPage={registrationPage}
                        styledtheme={styledtheme}
                      >
                        {pageTitle}
                      </PageTitle>
                      {subPage ? (
                        <PageTitleBadge>Make View</PageTitleBadge>
                      ) : groupOfPages ? (
                        <GroupOfPagesNavButton groupOfPages={groupOfPages} />
                      ) : workflowFiles ? (
                        <div>
                          <WorkflowFilesDropdown />
                        </div>
                      ) : null}
                    </PageTitleGroup>
                    <PageCompanyBox alert={alert}>
                      <BusinessIcon
                        sx={{
                          width: '13px',
                          marginBottom: '1px'
                        }}
                      />
                      {cnpj}
                    </PageCompanyBox>
                  </PageInformation>
                </PageInfoRowLeft>
              </div>
              {/*left/right*/}
              <div id="right-side">
                <RowOfButtons>{children}</RowOfButtons>
              </div>
            </PageInfoRow>
          </FirstRowContainer>
        </div>
      ) : !hidden ? (
        <div>
          <BeforeContainer>
            <ButtonReturn link={pageBack} />
          </BeforeContainer>
          <FirstRowContainer
            buttons={buttons}
            narrow={narrow}
            id="first-row-container"
          >
            <PageInfoRow>
              <div id="left-size">
                <PageInfoRowLeft>
                  <PageNavigation>
                    <ButtonPageNavigation
                      breadcrumb={breadcrumb}
                      page={page}
                      boxed={true}
                    />
                  </PageNavigation>
                  <PageInformation>
                    <PageTitleGroup>
                      <PageTitle
                        registrationPage={registrationPage}
                        styledtheme={styledtheme}
                      >
                        {pageTitle}
                      </PageTitle>
                      {subPage ? (
                        <PageTitleBadge>Make View</PageTitleBadge>
                      ) : groupOfPages ? (
                        <GroupOfPagesNavButton groupOfPages={groupOfPages} />
                      ) : null}
                    </PageTitleGroup>
                    <PageCompanyBox alert={alert}>
                      <BusinessIcon
                        sx={{
                          width: '13px',
                          marginBottom: '1px'
                        }}
                      />
                      {cnpj}
                    </PageCompanyBox>
                  </PageInformation>
                </PageInfoRowLeft>
              </div>
              <RightSideWrapper buttons={buttons}>
                <RightSideButtonsWrapper>
                  {isolated ? <ToggleLanguage /> : <div id="right-side"></div>}
                </RightSideButtonsWrapper>
              </RightSideWrapper>
            </PageInfoRow>
          </FirstRowContainer>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductHeader;
