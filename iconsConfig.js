// iconsConfig.js
export const iconConfig = {
  include: {
    lucide: [
      'mail','phone','map-pin','navigation','marker-pin','map','linkedin','twitter','instagram','youtube',
      'chevron-left','chevron-right','menu','x','star',
    ],
    'fa6-solid': [
      'envelope','phone','location-dot', 'map-pin', "video",
      'trash-can','house','building','truck','broom','screwdriver-wrench','helmet-safety','person-digging',
      'quote-left',            // ⬅️ add
      'quote-right',        // (optional)
    ],
    'fa6-regular': [
      'home','trash-can','building','truck','broom','screwdriver-wrench','helmet-safety','person-digging'
    ],
  },
  svgoOptions: { multipass: true, plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }] },
};
