export default function useMainLogic(cardNumber: Ref<string>, CVV: Ref<string>) {
  type OptionItem = { value: string, [key: string]: any, isSelected: boolean }

  const isModalOpen = ref(false);
  const years = reactive([
    { value: '2030', isSelected: false },
    { value: '2029', isSelected: false },
    { value: '2028', isSelected: false },
    { value: '2027', isSelected: false },
    { value: '2026', isSelected: false },
    { value: '2025', isSelected: false },
    { value: '2024', isSelected: false },
  ])
  const months = reactive([
    { value: 'January', isSelected: false },
    { value: 'February', isSelected: false },
    { value: 'March', isSelected: false },
    { value: 'April', isSelected: false },
    { value: 'May', isSelected: false },
    { value: 'June', isSelected: false },
    { value: 'July', isSelected: false },
    { value: 'August', isSelected: false },
    { value: 'September', isSelected: false },
    { value: 'October', isSelected: false },
    { value: 'November', isSelected: false },
    { value: 'December', isSelected: false },
  ]);
  const selectedMonth = computed(() => {
    return months.find(month => month.isSelected);
  })
  const selectedYear = computed(() => {
    return years.find(year => year.isSelected);
  })
  const isDisabledSubmit = computed(() => {
    if (!selectedMonth.value || !selectedYear.value || !cardNumber.value || !CVV.value) {
      return true;
    }

    if (cardNumber.value.length !== 20) {
      return true;
    }

    if (CVV.value.length !== 3) {
      return true;
    }

    return false;
  });

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  function handleYearSelect(option: OptionItem) {
    years.forEach((_, index, array) => {
      array[index].isSelected = false;
    });

    const optionIndex = years.findIndex(opt => opt.value === option.value);

    if (optionIndex !== -1) {
      years[optionIndex].isSelected = !years[optionIndex].isSelected;
    }
  }

  function handleMonthSelect(option: OptionItem) {
    months.forEach((_, index, array) => {
      array[index].isSelected = false;
    });

    const optionIndex = months.findIndex(opt => opt.value === option.value);

    if (optionIndex !== -1) {
      months[optionIndex].isSelected = !months[optionIndex].isSelected;
    }
  }

  return {
    isModalOpen,
    years,
    months,
    selectedMonth,
    selectedYear,
    isDisabledSubmit,
    openModal,
    closeModal,
    handleMonthSelect,
    handleYearSelect
  }
}