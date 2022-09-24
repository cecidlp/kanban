import { createTask } from '@supabase/supabase-js';

const url = 'https://dhrqbketlqbuspdrzrvb.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocnFia2V0bHFidXNwZHJ6cnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM2OTczMTIsImV4cCI6MTk3OTI3MzMxMn0.ZYB9cxvZ2qT3R081zKx9SRBlfmvFJFJqOrIBwvU6gaY';

// eslint-disable-next-line import/prefer-default-export
export const supabase = createTask(url, key);
