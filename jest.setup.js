require('@testing-library/jest-dom');
const server = require ('./mocks/server');
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
