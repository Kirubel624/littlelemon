import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import {vi} from 'vitest';

global.jest = vi;
expect.extend(matchers);