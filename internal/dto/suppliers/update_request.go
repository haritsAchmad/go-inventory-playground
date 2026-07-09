package dto

type UpdateSupplierRequest struct {
	Name string `json:"name" validate:"required,min=3,max=100"`

	Phone string `json:"phone" validate:"required"`

	Address string `json:"address" validate:"required"`
}
