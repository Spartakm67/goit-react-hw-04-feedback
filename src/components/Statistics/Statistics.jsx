import  { StatisticsStyle, StatSpan}  from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => {
  return (
    <StatisticsStyle>
      <StatSpan> Good : {good}</StatSpan>
      <StatSpan> Neutral : {neutral}</StatSpan>
      <StatSpan> Bad : {bad}</StatSpan>
      <StatSpan> Total : {total}</StatSpan>
      <StatSpan> Positive feedback : {positivePercentage} %</StatSpan>
    </StatisticsStyle>
  );
};

Statistics.propTypes = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.number,
  positivePercentage:PropTypes.number
 };