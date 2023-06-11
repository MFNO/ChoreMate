/* eslint-disable func-names */
import dayjs from 'dayjs';
import 'dayjs/plugin/utc';
import 'dayjs/plugin/duration';
import 'dayjs/plugin/weekday';

dayjs.extend(require('dayjs/plugin/utc'));
dayjs.extend(require('dayjs/plugin/duration'));
dayjs.extend(require('dayjs/plugin/weekday'));  