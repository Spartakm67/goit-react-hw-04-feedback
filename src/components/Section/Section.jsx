import  { SectionStyle, SectionTitle, ChildrenSection }  from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <SectionTitle>{title}</SectionTitle>
      <ChildrenSection>{children}</ChildrenSection>
    </SectionStyle>
  );
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
 };